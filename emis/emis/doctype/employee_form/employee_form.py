# -*- coding: utf-8 -*-
# Copyright (c) 2022, umer and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class EmployeeForm(Document):
	# def validate(self):
	# 	self.first_name 
	pass

# def function cnic_validate(cnic):
# 	regex_cnic = /^([0-9]{5}[\-][0-9]{7}[\-][0-9]{1})$/;
#     if (not(cnic.match(regex_cnic)) or cnic.length != 15):
# 		return false;
#     else: 
#         return true;
    

# def function name_validate(name):
#     is_text_valid = false
#     if (name.length >= 3):
# 		pattern = /^[a-zA-Z. ]+$/g;
#         if(name.match(pattern) != null):
#           is_text_valid = true
        
     
# 	  return is_text_valid; 

# def function email_validate(email):
# 	pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
# 	is_email_valid = false;
# 	  if(email.match(pattern) != null):
# 		is_email_valid = true;
	  
# 	  return is_email_valid;
	  
#     if (not(email.match(mailformat))):
#         return false;
#     else:
#         return true;
    



# def function phone_validate(phone):
#     regex_phone = /^0[0-9]{3}-[0-9]{7}$/;
  
#     if (not(phone.match(regex_phone)) or phone.length != 12):
        
#         return false;
#     else: 
#         return true;
    


# def function phone(phone):
#     regex_phone = /^0[0-9]{2}-[0-9]{7}$/;
  
#     if (not(phone.match(regex_phone)) or phone.length != 11):
       
#         return false;
#     else:
#         return true;
    


