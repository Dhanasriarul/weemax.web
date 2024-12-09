<template>
  <div>
    <div id="displayData">
      <!-- Data will be displayed here -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Get the data passed from the form on index.html via POST request
    const urlSearchParams = new URLSearchParams(window.location.search);
    const formData = Object.fromEntries(urlSearchParams.entries());

    console.log(formData);

    // Display the data on the check.html page
    const displayDataElement = document.getElementById("displayData");
    if (formData.encResp) {
      const nameData = document.createElement("p");
      nameData.textContent = `Name: ${formData.encResp}`;
      displayDataElement.appendChild(nameData);
    } else {
      const noDataMessage = document.createElement("p");
      noDataMessage.textContent = "No data entered.";
      displayDataElement.appendChild(noDataMessage);
    }
  },
};

// export default {
//   async asyncData({ req }) {
//     // Access the form data from the request body (if using POST method)
//     const formData = req.body;

//     console.log(formData);

//     // Process the form data or return it directly to be used in the component
//     return {
//       formData,
//     };
//   },
// };
//
</script>
