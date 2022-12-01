// Copyright (c) 2022, umer and contributors
// For license information, please see license.txt
// frappe.require([
// 	'/assets/js/personal_detail_validation.js',
// ]);
frappe.require([
	'/assets/js/jquery.mask.js',
]);
frappe.ui.form.on('Employee Form', {
	refresh: function(frm) {
		date_rest()
		mask_placeholder()
	},
	onload: function(frm){
		date_rest()
		mask_placeholder()

	},
	validate: function(frm){
		console.log("validate");
		jquery_func(frm)

	},
	onload_post_render: function(frm){
		$("input[data-fieldname='first_name']").keypress(function (e) {
			onlyalpha(e);
		});
		$("input[data-fieldname='last_name']").keypress(function (e) {
			onlyalpha(e);
		});
		$("input[data-fieldname='father_name']").keypress(function (e) {
			onlyalpha(e);
		});
		
		$("input[data-fieldname='person_to_be_contacted']").keypress(function (e) {
			onlyalpha(e);
		});
	
		$("input[data-fieldname='relation']").keypress(function (e) {
			onlyalpha(e);
		});
	
		$("input[data-fieldname='place_of_issue']").keypress(function (e) {
			onlyalpha(e);
		});
		$("input[data-fieldname='leave_approver_name']").keypress(function (e) {
			onlyalpha(e);
		});
		
		$("input[data-fieldname='name_of_spouse']").keypress(function (e) {
			onlyalpha(e);
		});
	
		$("input[data-fieldname='post_held']").keypress(function (e) {
			onlyalpha(e);
		});
	
		$("input[data-fieldname='name_emp']").keypress(function (e) {
			onlyalpha(e);
		});
	
		$("input[data-fieldname='name_officer']").keypress(function (e) {
			onlyalpha(e);
		});
	},

	district:function(frm){
		frm.set_value("tehsil", "")
		if (frm.doc.district) {
			frm.set_query("tehsil", function () {
				return {
					"filters": {
						"district": frm.doc.district
					}
				}
			});
		}
	},

	cadre:function(frm){

		
		frm.set_value("position_at_initial_appointment", "")
		if (frm.doc.cadre) {
			frm.set_query("position_at_initial_appointment", function () {
				return {
					"filters": {
						"cadre": frm.doc.cadre
					}
				}
			});
		}
	},

});
function jquery_func(frm) {
	
		var name = $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid First Name")
				frm.set_value("first_name", '')
			}
		} 
	



		var name = $(this).val();
			if(name){
				if (!(name_validate(name))) {
					$(".throw").empty()
					frappe.throw("Please Enter Valid Last Name")
					frm.set_value("last_name", '')
				}
			}
	

		var name = $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Father/Husband Name")
				frm.set_value("father_name", '')
			}
		}



		var cnic =  $(this).val();
		if(cnic){
			if (!(cnic_validate(cnic))) {
				$(".throw").empty()
				
				frappe.throw("Please Enter Valid CNIC")
				frm.set_value("cnic", '')
			}
		}
	
	

		var email =  $(this).val();
		if(email){
			if (!(email_validate(email))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Email")
				frm.set_value("email_id", '')
			}
		
		}

	

	
		var num =  $(this).val();
		if(num){
			if (!(phone_validate(num))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Mobile no")
				frm.set_value("mobile_no", '')
			}
		}
	

	
		var num =  $(this).val();
		if(num){
			if (((!phone_validate(num)) && (!phone(num)))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Home no")
				frm.set_value("home_contact", '')
			}
		}

	

	
		var num =  $(this).val();
		if(num){
			if (((!phone_validate(num)) && (!phone(num)))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Office Contact no")
				frm.set_value("office_contact", '')
			}
		}



		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Emergency Contact Name")
				frm.set_value("place_of_issue", '')
			}
		}
	


		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Emergency Contact Name")
				frm.set_value("person_to_be_contacted", '')
			}
		}



		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Relation with Emergency Contact")
				frm.set_value("relation", '')
			}
		}
	




	
		var num =  $(this).val();
		if(num){
			if (!(phone_validate(num))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid Emergency no")
				frm.set_value("emergency_number", '')
			}
		}

	


	
		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Leave Approver Name")
				frm.set_value("leave_approver_name", '')
			}
		}




	
		var cnic =  $(this).val();
		if(cnic){
			if (!(cnic_validate(cnic))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid CNIC of Spouse")
				frm.set_value("cnic_of_service", '')
			}
		}

	



	
		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid Name")
				frm.set_value("name1", '')
			}
		}
	




		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Name")
				frm.set_value("name_emp", '')
			}
		}

	



	
		var num =  $(this).val();
		if(num){
			if (!(phone_validate(num))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Contact No")
				frm.set_value("contact_no", '')
			}
		}

	



	
		var cnic =  $(this).val();
		if(cnic){
			if (!(cnic_validate(cnic))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid CNIC")
				frm.set_value("cnic_emp", '')
			}
		}

	




		var name =  $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter Valid Countersigning Officer Name")
				frm.set_value("name_officer", '')
			}
		}

	


	
		var num = $(this).val();
		if(num){
			if (!(phone_validate(num))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid Phone no")
				frm.set_value("contact_officer", '')
			}
		}

	



	
		var name = $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid Spouse Name")
				frm.set_value("name_of_spouse", '')
			}
		}

	


	
		var cnic = $(this).val();
		if(cnic){
			if (!(cnic_validate(cnic))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid CNIC")
				frm.set_value("cnic_spouse", '')
			}
		}

	




		var name = $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid place of appointment")
				frm.set_value("place_of_appointment", '')
			}
		}

	


	
		var name = $(this).val();
		if(name){
			if (!(name_validate(name))) {
				$(".throw").empty()
				frappe.throw("Please Enter valid place of appointment")
				frm.set_value("post_held", '')
			}
		}

}

function date_rest(){
	
	$("input[data-fieldname='cnic_issue']").datepicker({
		maxDate: new Date(),

		
	});
	$("input[data-fieldname='date_of_birth']").datepicker({
		maxDate: new Date(),
		
		
	});
	$("input[data-fieldname='passport_date_of_issue']").datepicker({
		maxDate: new Date(),
		
		
	});
	$("input[data-fieldname='date_of_appointment']").datepicker({
		maxDate: new Date(),
		
		
	});
	$("input[data-fieldname='certificate_date']").datepicker({
		maxDate: new Date(),
		
		
	});
	$("input[data-fieldname='date_officer']").datepicker({
		maxDate: new Date(),
		
		
	});

	// $("input[data-fieldname='job_offer_date']").datepicker({
	// 	maxDate: new Date(),
		
		
	// });

}

function mask_placeholder(){
	$("input[data-fieldname='cnic']").mask('00000-0000000-0');
	$("input[data-fieldname='cnic']").attr("placeholder", "xxxxx-xxxxxx-x");
	$("input[data-fieldname='mobile_no']").mask('0000-0000000');
	$("input[data-fieldname='mobile_no']").attr("placeholder", "0000-0000000");
	
	//$("input[data-fieldname='home_contact']").mask('0000-0000000 || 000-0000000');
	$("input[data-fieldname='home_contact']").attr("placeholder", "0000-0000000 or 000-0000000");

	

	$("input[data-fieldname='emergency_number']").mask('0000-0000000');
	$("input[data-fieldname='emergency_number']").attr("placeholder", "0000-0000000");


	 
	$("input[data-fieldname='cnic_spouse']").mask('00000-0000000-0');
	$("input[data-fieldname='cnic_spouse']").attr("placeholder",'xxxxx-xxxxxxx-x');

		
	$("input[data-fieldname='cnic_emp']").mask('00000-0000000-0');
	$("input[data-fieldname='cnic_emp']").attr("placeholder",'xxxxx-xxxxxxx-x');
	
	$("input[data-fieldname='contact_no']").mask('0000-0000000');
	$("input[data-fieldname='contact_no']").attr("placeholder",'0000-0000000');

	$("input[data-fieldname='contact_officer']").mask('0000-0000000');
	$("input[data-fieldname='contact_officer']").attr("placeholder",'0000-0000000');




	}
