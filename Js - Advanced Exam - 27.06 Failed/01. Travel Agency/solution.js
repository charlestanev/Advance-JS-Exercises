window.addEventListener('load', solution);



function solution(containerId) {
  document.querySelector('#submit').addEventListener('click', submitForm());
  document.querySelector('#edit').addEventListener('click', editForm());
  document.querySelector('#continue').addEventListener('click',addPaymentDetails());
  function submitForm() {
      if (document.querySelector('#fullName').value.trim() !== "" && document.querySelector('#email').value.trim() !== "") {
          document.querySelector('#infoPreview')
              .insertAdjacentHTML("beforeend",`<li>Name: ${document.querySelector('#fullName').value}</li>`)
              .insertAdjacentHTML("beforeend",`<li>E-mail: ${document.querySelector('#email').value}</li>`)
              .insertAdjacentHTML("beforeend",`<li>Phone: ${document.querySelector('#phoneNumber').value}</li>`)
              .insertAdjacentHTML("beforeend",`<li>Address: ${document.querySelector('#address').value}</li>`)
              .insertAdjacentHTML("beforeend",`<li>Postal Code: ${document.querySelector('#postalCode').value}</li>`);
          document.querySelector('input').val('');
          document.querySelector('#submit').prop('disabled', true);
          document.querySelector('#edit').prop('disabled', false);
          document.querySelector('#continue').prop('disabled', false);
      }
  }
  function editForm() {
      let info = document.querySelector('li');
      document.querySelector('#fullName').val(info[0].textContent.substring(6));
      document.querySelector('#email').val(info[1].textContent.substring(8));
      document.querySelector('#phoneNumber').val(info[2].textContent.substring(7));
      document.querySelector('#address').val(info[3].textContent.substring(9));
      document.querySelector('#postalCode').val(info[4].textContent.substring(13));
      document.querySelector('ul li').remove();
      document.querySelector('#submit').prop('disabled', false);
      document.querySelector('#edit').prop('disabled', true);
      document.querySelector('#continue').prop('disabled', true);
  }
  function addPaymentDetails() {
      document.querySelector(containerId)
          .insertAdjacentHTML("beforeend",`<h2>Payment details</h2>`)
          .insertAdjacentHTML("beforeend",document.querySelector(`<select id="paymentOptions" class="custom-select">`)
              .insertAdjacentHTML("beforeend",`<option selected disabled hidden>Choose</option>`)
              .insertAdjacentHTML("beforeend",`<option value="creditCard">Credit Card</option>`)
              .insertAdjacentHTML("beforeend",`<option value="bankTransfer">Bank Transfer</option>`)
          )
          .insertAdjacentHTML("beforeend",`<div id="extraDetails">`);
      document.querySelector('#paymentOptions').addEventListener('change',appendExtraDetails);
      document.querySelector('#submit').prop('disabled', true);
      document.querySelector('#edit').prop('disabled', true);
      document.querySelector('#continue').prop('disabled', true);
  }
  function appendExtraDetails() {
      let selected=document.querySelector("#paymentOptions").querySelector(':selected').value;
      document.querySelector('#extraDetails').empty();
      if(selected==='creditCard'){
          document.querySelector('#extraDetails')
              .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Card Number<input></div><br>`))
              .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Expiration Date<input></div><br>`))
              .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Security Numbers<input></div><br>`))
      }
      else{
          document.querySelector('#extraDetails')
              .insertAdjacentHTML("beforeend",document.querySelector(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`))
      }
      document.querySelector('#extraDetails').insertAdjacentHTML("beforeend",document.querySelector(`<button id="checkOut">Check Out</button>`));
      document.querySelector('#checkOut').addEventListener('click',function () {
          document.querySelector('#wrapper').empty();
          document.querySelector('#wrapper').insertAdjacentHTML("beforeend",document.querySelector(`<h4>Thank you for your reservation!</h4>`))
      })
  }

}
//   document.querySelector('#submit').addEventListener('click', submitForm);
//   document.querySelector('#edit').addEventListener('click', editForm);
//   document.querySelector('#continue').addEventListener('click',addPaymentDetails);
//   function submitForm() {
//       if (document.querySelector('#fullName').value.trim() !== "" && document.querySelector('#email').value.trim() !== "") {
//           document.querySelector('#infoPreview')
//               .insertAdjacentHTML("beforeend",`<li>Name: ${document.querySelector('#fullName').value}</li>`)
//               .insertAdjacentHTML("beforeend",`<li>E-mail: ${document.querySelector('#email').value}</li>`)
//               .insertAdjacentHTML("beforeend",`<li>Phone: ${document.querySelector('#phoneNumber').value}</li>`)
//               .insertAdjacentHTML("beforeend",`<li>Address: ${document.querySelector('#address').value}</li>`)
//               .insertAdjacentHTML("beforeend",`<li>Postal Code: ${document.querySelector('#postalCode').value}</li>`);
//           document.querySelector('input').val('');
//           document.querySelector('#submit').prop('disabled', true);
//           document.querySelector('#edit').prop('disabled', false);
//           document.querySelector('#continue').prop('disabled', false);
//       }
//   }
//   function editForm() {
//       let info = document.querySelector('li');
//       document.querySelector('#fullName').val(info[0].textContent.substring(6));
//       document.querySelector('#email').val(info[1].textContent.substring(8));
//       document.querySelector('#phoneNumber').val(info[2].textContent.substring(7));
//       document.querySelector('#address').val(info[3].textContent.substring(9));
//       document.querySelector('#postalCode').val(info[4].textContent.substring(13));
//       document.querySelector('ul li').remove();
//       document.querySelector('#submit').prop('disabled', false);
//       document.querySelector('#edit').prop('disabled', true);
//       document.querySelector('#continue').prop('disabled', true);
//   }
//   function addPaymentDetails() {
//       document.querySelector(containerId)
//           .insertAdjacentHTML("beforeend",`<h2>Payment details</h2>`)
//           .insertAdjacentHTML("beforeend",document.querySelector(`<select id="paymentOptions" class="custom-select">`)
//               .insertAdjacentHTML("beforeend",`<option selected disabled hidden>Choose</option>`)
//               .insertAdjacentHTML("beforeend",`<option value="creditCard">Credit Card</option>`)
//               .insertAdjacentHTML("beforeend",`<option value="bankTransfer">Bank Transfer</option>`)
//           )
//           .insertAdjacentHTML("beforeend",`<div id="extraDetails">`);
//       document.querySelector('#paymentOptions').addEventListener('change',appendExtraDetails);
//       document.querySelector('#submit').prop('disabled', true);
//       document.querySelector('#edit').prop('disabled', true);
//       document.querySelector('#continue').prop('disabled', true);
//   }
//   function appendExtraDetails() {
//       let selected=document.querySelector("#paymentOptions").querySelector(':selected').value;
//       document.querySelector('#extraDetails').empty();
//       if(selected==='creditCard'){
//           document.querySelector('#extraDetails')
//               .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Card Number<input></div><br>`))
//               .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Expiration Date<input></div><br>`))
//               .insertAdjacentHTML("beforeend",document.querySelector(`<div class="inputLabel">Security Numbers<input></div><br>`))
//       }
//       else{
//           document.querySelector('#extraDetails')
//               .insertAdjacentHTML("beforeend",document.querySelector(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`))
//       }
//       document.querySelector('#extraDetails').insertAdjacentHTML("beforeend",document.querySelector(`<button id="checkOut">Check Out</button>`));
//       document.querySelector('#checkOut').addEventListener('click',function () {
//           document.querySelector('#wrapper').empty();
//           document.querySelector('#wrapper').insertAdjacentHTML("beforeend",document.querySelector(`<h4>Thank you for your reservation!</h4>`))
//       })
//   }
// }




//   function solution(containerId) {
//     $('#submit').on('click', submitForm);
//     $('#edit').on('click', editForm);
//     $('#continue').on('click',addPaymentDetails);
//     function submitForm() {
//         if ($('#fullName').val().trim() !== "" && $('#email').val().trim() !== "") {
//             $('#infoPreview')
//                 .append(`<li>Name: ${$('#fullName').val()}</li>`)
//                 .append(`<li>E-mail: ${$('#email').val()}</li>`)
//                 .append(`<li>Phone: ${$('#phoneNumber').val()}</li>`)
//                 .append(`<li>Address: ${$('#address').val()}</li>`)
//                 .append(`<li>Postal Code: ${$('#postalCode').val()}</li>`);
//             $('input').val('');
//             $('#submit').prop('disabled', true);
//             $('#edit').prop('disabled', false);
//             $('#continue').prop('disabled', false);
//         }
//     }
//     function editForm() {
//         let info = $('li');
//         $('#fullName').val(info[0].textContent.substring(6));
//         $('#email').val(info[1].textContent.substring(8));
//         $('#phoneNumber').val(info[2].textContent.substring(7));
//         $('#address').val(info[3].textContent.substring(9));
//         $('#postalCode').val(info[4].textContent.substring(13));
//         $('ul li').remove();
//         $('#submit').prop('disabled', false);
//         $('#edit').prop('disabled', true);
//         $('#continue').prop('disabled', true);
//     }
//     function addPaymentDetails() {
//         $(containerId)
//             .append(`<h2>Payment details</h2>`)
//             .append($(`<select id="paymentOptions" class="custom-select">`)
//                 .append(`<option selected disabled hidden>Choose</option>`)
//                 .append(`<option value="creditCard">Credit Card</option>`)
//                 .append(`<option value="bankTransfer">Bank Transfer</option>`)
//             )
//             .append(`<div id="extraDetails">`);
//         $('#paymentOptions').on('change',appendExtraDetails);
//         $('#submit').prop('disabled', true);
//         $('#edit').prop('disabled', true);
//         $('#continue').prop('disabled', true);
//     }
//     function appendExtraDetails() {
//         let selected=$("#paymentOptions").find(':selected').val();
//         $('#extraDetails').empty();
//         if(selected==='creditCard'){
//             $('#extraDetails')
//                 .append($(`<div class="inputLabel">Card Number<input></div><br>`))
//                 .append($(`<div class="inputLabel">Expiration Date<input></div><br>`))
//                 .append($(`<div class="inputLabel">Security Numbers<input></div><br>`))
//         }
//         else{
//             $('#extraDetails')
//                 .append($(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`))
//         }
//         $('#extraDetails').append($(`<button id="checkOut">Check Out</button>`));
//         $('#checkOut').on('click',function () {
//             $('#wrapper').empty();
//             $('#wrapper').append($(`<h4>Thank you for your reservation!</h4>`))
//         })
//     }
//   }


