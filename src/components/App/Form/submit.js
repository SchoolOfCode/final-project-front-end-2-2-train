// import React from "react";

// async function formSubmit(user_id, latlng, API_URL) {
//     const lat = latlng.lat 
//     const lng = latlng.lng
//    const obj = {user_id:user_id, lat:lat, lng:lng}
//    try {
//       const response = await fetch(`${API_URL}/location`, {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(obj),
//       });
//       const result = await response.json();
//       if (result.success === true) {
//          console.log("it's ya boiiiii", result.loc_id);
//       } else {
//          console.log(response);
//       }
//    } catch (err) {
//       console.log(err);
//    }
// }

// export default formSubmit;
