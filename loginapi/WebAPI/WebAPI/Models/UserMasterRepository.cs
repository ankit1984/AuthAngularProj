using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class UserMasterRepository : IDisposable
    {
       
        TestingEntities context = new TestingEntities();

        public UserMaster ValidateUser(string username,string password)
        {
            return context.UserMasters.FirstOrDefault(user =>
            user.UserName.Equals(username, StringComparison.OrdinalIgnoreCase) && user.UserPassword == password);
        }
        public void Dispose()
        {
            context.Dispose();
        }
    }
}