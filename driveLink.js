    //Script for the download resume button, so that it opens in a new tab and gets downloaded simulataneously
        // Wait for the document to be ready
        document.addEventListener("DOMContentLoaded", function() {

            // Find the link by its ID
            const driveLink = document.getElementById('myDriveLink');

            // Add a click event listener
            driveLink.addEventListener('click', function(event) {
                // Prevent the link from doing its default action (which is nothing, in this case)
                event.preventDefault();

                // --- IMPORTANT: REPLACE THIS WITH YOUR FILE ID ---
                const fileId = '1bprcxZFCO1SxUtsSSkjmRKRTmzvOaQkl'; 
                // ----------------------------------------------------

                // Construct the two URLs
                const previewUrl = `https://drive.google.com/file/d/${fileId}/view`;
                const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

                // Action 1: Open the preview in a new tab
                window.open(previewUrl, '_blank');

                // Action 2: Trigger the download
                // We create a temporary, invisible link and "click" it
                const tempLink = document.createElement('a');
                tempLink.href = downloadUrl;
                
                // You can optionally suggest a filename for the download
                // tempLink.setAttribute('download', 'your-filename.pdf'); 
                
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
            });
        });


