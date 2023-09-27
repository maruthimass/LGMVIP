document.addEventListener("DOMContentLoaded", function () {
            // Get references to HTML elements
            const registerButton = document.getElementById("registerButton");
            const clearHistoryButton = document.getElementById("clearHistoryButton");
            const historyList = document.getElementById("historyList");
            const imageFileInput = document.getElementById("imageFile");

            // Add an event listener for the "Register" button
            registerButton.addEventListener("click", function () {
                // Get user input
                const name = document.getElementById("name").value;
                const gender = document.getElementById("gender").value;
                const username = document.getElementById("username").value;
                const email = document.getElementById("email").value;
                const mobile = document.getElementById("mobile").value;
                const skills = document.getElementById("skills").value;
                const password = document.getElementById("password").value;
                const confirmPassword = document.getElementById("confirmPassword").value;
                const country = document.getElementById("country").value;
                const acceptConditions = document.getElementById("acceptConditions").checked;

                // Validate the form (add your validation logic here)
                if (!name || !gender || !username || !email || !mobile || !skills || !password || !confirmPassword || !country || !imageFileInput.files[0]) {
                    alert("Please fill in all the required fields and select an image.");
                    return;
                }

                if (password !== confirmPassword) {
                    alert("Passwords do not match. Please re-enter your password.");
                    return;
                }

                if (!acceptConditions) {
                    alert("Please accept the terms and conditions.");
                    return;
                }

                // Create a new registration history item
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div class="history-item">
                        <div class="history-details">
                            <p>Name: ${name}</p>
                            <p>Gender: ${gender}</p>
                            <p>Email: ${email}</p>
                            <p>Mobile: ${mobile}</p>
                            <p>Skills: ${skills}</p>
                        </div>
                        <div class="history-image" id="imageContainer">
                            <img src="${URL.createObjectURL(imageFileInput.files[0])}" alt="${name}'s Image">
                        </div>
                    </div>
                `;

                historyList.appendChild(listItem);

                // Clear the form fields
                document.getElementById("name").value = "";
                document.getElementById("gender").value = "select";
                document.getElementById("username").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile").value = "";
                document.getElementById("skills").value = "";
                document.getElementById("password").value = "";
                document.getElementById("confirmPassword").value = "";
                document.getElementById("country").value = "select";
                document.getElementById("acceptConditions").checked = false;

                // Clear the image file input
                imageFileInput.value = "";
            });

            // Add an event listener for the "Clear History" button
            clearHistoryButton.addEventListener("click", function () {
                // Clear registration history
                historyList.innerHTML = "";
            });
        });