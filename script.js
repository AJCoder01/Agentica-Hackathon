function processFile() {
  // Mock data for demonstration
  const mockTags = "Invoice, Financial";
  const mockMetadata = "Date: 2023-10-01, Amount: $500.00";

  // Display mock results
  document.getElementById("tags").textContent = mockTags;
  document.getElementById("metadata").textContent = mockMetadata;

  // Show the results section
  document.getElementById("results").style.display = "block";
}