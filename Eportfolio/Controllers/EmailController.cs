using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;


namespace Eportfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpGet("status")]
        public ActionResult<string> GetStatus()
        {
            return new ActionResult<string>("alive");
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<string> SendEmail(ContactFormData contact)
        {
            try
            {
                using (StreamReader r = new StreamReader("./Config.json"))
                {
                    string json = r.ReadToEnd();
                    EmailConfig config = JsonConvert.DeserializeObject<EmailConfig>(json);
                    EmailHelper emailHelper = new EmailHelper(config.Email, config.ApiKey);

                    if (emailHelper.ValidateMessageContent(contact.Message))
                    {
                        emailHelper.sendEmailToMe(contact);
                        contact.Message = "Thank you for reaching out I will get back to you as soon as possible.";
                        emailHelper.sendEmailToContacter(contact);

                    }
                    else
                    {
                        contact.Message = "Thank you for reaching out, however HTML code was detected in your message and due to security risks I only accept plain text messages.";
                        emailHelper.sendEmailToContacter(contact);
                    }
                    string success = "success";
                    return new ActionResult<string>(success);
                }
            }
            catch(Exception e)
            {
                return new ActionResult<string>(e.Message);
            }
        }


    }

    public class EmailHelper
    {
        string ApiKey;
        string MyEmail;
        SendGridClient client;
        public EmailHelper( string myEmail, string key)
        {
            ApiKey = key;
            MyEmail = myEmail;
            client = new SendGridClient(ApiKey);
        }
        //check for html in message.
        public bool ValidateMessageContent(string message)
        {
            if (Regex.IsMatch(message, "<(.|\n)*?>"))
            {
                return false;
            }
            return true;
        }

        public void sendEmailToContacter(ContactFormData contact)
        {
            var from = new EmailAddress("TimWalsh@NoReply.com", "Tim Walsh");
            var subject = $"Message recieved - Thank You {contact.Name}!";
            var to = new EmailAddress(contact.EmailAddress, contact.Name);
            var plainTextContent = contact.Message;
            //TODO: decide on formatting
            var htmlContent = "";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            client.SendEmailAsync(msg);
        }

        public void sendEmailToMe(ContactFormData contact)
        {
            var from = new EmailAddress("Eportfolio@eportfolio.com", contact.Name);
            var subject = "Hi Tim I saw your Eportfolio";
            var to = new EmailAddress(MyEmail, "Tim Walsh");
            var plainTextContent = contact.Message;
            var htmlContent = "";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            client.SendEmailAsync(msg);
        }
    }

    public class EmailConfig
    {
        public string Email { get; set; }
        public string ApiKey { get; set; }

        [JsonConstructor]
        public EmailConfig(string emailApiKey, string myEmail)
        {
            Email = myEmail;
            ApiKey = emailApiKey;
        }
    }

    public class ContactFormData
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Message { get; set; }

        [JsonConstructor]
        public ContactFormData(string name, string email, string message)
        {
            Name = name;
            EmailAddress = email;
            Message = message;
        }
    }
}
