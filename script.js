function getFormvalue(event) {
            event.preventDefault(); // Prevents default form submission behavior
            
            let firstName = document.querySelector('#fname').value.trim();
            let lastName = document.querySelector('#lname').value.trim();
            
            if (!firstName || !lastName) {
                alert("Please enter both first and last names.");
                return;
            }
            
            alert(firstName + " " + lastName);
        }
        
        document.querySelector('#nameForm').addEventListener('submit', getFormvalue);
