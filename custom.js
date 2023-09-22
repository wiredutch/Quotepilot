var currentQuestion = 1;
var totalQuestions = 14; // Update this to the total number of question containers

// Function to update the progress indicator
function updateProgressIndicator() {
    var currentStepElement = document.getElementById("current-step");
    var totalStepsElement = document.getElementById("total-steps");

    currentStepElement.textContent = currentQuestion;
    totalStepsElement.textContent = totalQuestions;
}

// Function to show the next question
function showNextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++; // Increment the current question
        showQuestion(currentQuestion);
    }
}

// Function to show the previous question
function showPreviousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--; // Decrement the current question
        showQuestion(currentQuestion);
        updateProgressIndicator();
    }
}

// Function to show a specific question by questionNumber
function showQuestion(questionNumber) {
    // Hide all questions first
    for (var i = 1; i <= totalQuestions; i++) {
        var questionContainer = document.getElementById("question" + i);
        if (questionContainer) {
            questionContainer.style.display = "none";
        }
    }

    // Show the specified question
    var currentQuestionContainer = document.getElementById("question" + questionNumber);
    if (currentQuestionContainer) {
        currentQuestionContainer.style.display = "block";
    }

    // Update the visibility and text of the "Previous" and "Next" buttons based on the current question
    var previousBtn = $('#previousBtn');
    var nextBtn = $('#nextBtn');

    if (currentQuestion === 1 || currentQuestion === 10) {
        previousBtn.hide();
    } else {
        previousBtn.show();
    }

    if (currentQuestion === totalQuestions) {
        // Hide the "Next" button and replace it with a "Close" button for question 14
        nextBtn.hide();
        if (questionNumber === 14) {
            nextBtn.after('<button class="btn btn-primary" id="closeBtn" onclick="closeModal()">Close</button>');
        }
    } else {
        nextBtn.show();
        // Update the text of the "Next" button for question 13
        if (currentQuestion === 13) {
            nextBtn.text("Book");
        } else {
            nextBtn.text("Next");
        }
        // Remove the "Close" button if not on question 14
        $('#closeBtn').remove();
    }
}

// Function to close the modal (implement this according to your modal logic)
function closeModal() {
    // Add your code here to close the modal
    // For example, you can use Bootstrap's modal close method if you're using Bootstrap modals
    $('#quoteModal').modal('hide');
}

// Call the initial setup
showQuestion(currentQuestion);

$(document).ready(function () {
    function togglepropertyFloorLevelDivVisibility() {
        if ($("#propertyType").val() === "Apartment") {
            $("#propertyFloorLevelDiv").closest('.form-floating').show();
        } else {
            $("#propertyFloorLevelDiv").closest('.form-floating').hide();
            $("#accessibiltyLiftDiv").hide();  // Hide the lift if Apartment is not selected
        }
    }

    function toggleLiftVisibilityDiv() {
        const floorLevel = $("#propertyFloorLevelDiv select").val();
        if (floorLevel && floorLevel !== "Select..." && floorLevel !== "Ground") {
            $("#accessibiltyLiftDiv").show();
        } else {
            $("#accessibiltyLiftDiv").hide();
        }
    }

    // Initial visibility state based on the default selection
    togglepropertyFloorLevelDivVisibility();
    toggleLiftVisibilityDiv();

    // Event listener for propertyType
    $("#propertyType").change(function () {
        togglepropertyFloorLevelDivVisibility();
        // If propertyType is not Apartment, hide the lift
        if ($("#propertyType").val() !== "Apartment") {
            $("#accessibiltyLiftDiv").hide();
        } else {
            toggleLiftVisibilityDiv();  // Check the lift visibility when Apartment is selected
        }
    });

    // Event listener for propertyFloorLevelDiv
    $("#propertyFloorLevel select").change(toggleLiftVisibilityDiv);

    // Event listener for the Next button
    $("#nextBtn").click(function() {
        togglepropertyFloorLevelDivVisibility();
        toggleLiftVisibilityDiv();
    });

	function togglepropertyFloorLevelDivVisibilityTo() {
        if ($("#propertyTypeTo").val() === "Apartment") {
            $("#propertyFloorLevelDivTo").closest('.form-floating').show();
        } else {
            $("#propertyFloorLevelDivTo").closest('.form-floating').hide();
            $("#accessibiltyLiftDivTo").hide();  // Hide the lift if Apartment is not selected
        }
    }

    function toggleLiftVisibilityDivTo() {
        const floorLevelTo = $("#propertyFloorLevelDivTo select").val();
        if (floorLevelTo && floorLevelTo !== "Select..." && floorLevelTo !== "Ground") {
            $("#accessibiltyLiftDivTo").show();
        } else {
            $("#accessibiltyLiftDivTo").hide();
        }
    }

    // Initial visibility state based on the default selection
    togglepropertyFloorLevelDivVisibilityTo();
    toggleLiftVisibilityDivTo();

    // Event listener for propertyType
    $("#propertyTypeTo").change(function () {
        togglepropertyFloorLevelDivVisibilityTo();
        // If propertyType is not Apartment, hide the lift
        if ($("#propertyTypeTo").val() !== "Apartment") {
            $("#accessibiltyLiftDivTo").hide();
        } else {
            toggleLiftVisibilityDivTo();  // Check the lift visibility when Apartment is selected
        }
    });

    // Event listener for propertyFloorLevelDiv
    $("#propertyFloorLevelTo select").change(toggleLiftVisibilityDivTo);

    // Event listener for the Next button
    $("#nextBtn").click(function() {
        togglepropertyFloorLevelDivVisibilityTo();
        toggleLiftVisibilityDivTo();
    });

});

$(document).ready(function() {
    $("#addMoreFields").click(function(e) {
        e.preventDefault(); // Prevent the default button behavior

        // Create a new input field
        const newField = $(
            `<div class="col-12 mb-3 form-floating custom-input">
                <input type="text" class="form-control" placeholder="Enter large item" required>
                <label>Large Item</label>
            </div>`
        );

        // Append the new field to the container
        $("#dynamicFields").append(newField);

        // Focus on the newly created input field
        newField.find("input").focus();

        // Scroll the "Add more" button into view with the new field centered vertically
        $("#addMoreFields")[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Handle input change to delete the field if it's empty
    $("#dynamicFields").on("input", "input", function() {
        if ($(this).val() === "") {
            const allInputs = $("#dynamicFields input");
            if (allInputs.length > 1) { // Ensure there's always at least one input field
                const currentField = $(this).closest(".form-floating");
                const prevField = currentField.prev(".form-floating");
                currentField.remove();
                prevField.find("input").focus(); // Focus on the input field above
            }
        }
    });

    // Handle delete or backspace key press on an empty field
    $("#dynamicFields").on("keydown", "input", function(e) {
        if (($(this).val() === "") && (e.key === "Backspace" || e.key === "Delete")) {
            const allInputs = $("#dynamicFields input");
            if (allInputs.length > 1) { // Ensure there's always at least one input field
                const currentField = $(this).closest(".form-floating");
                const prevField = currentField.prev(".form-floating");
                currentField.remove();
                prevField.find("input").focus(); // Focus on the input field above
            }
        }
    });
});

const dateInput = document.getElementById("datepicker");

    dateInput.addEventListener("input", function (e) {
        let inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (inputValue.length > 8) {
            // Limit the length to 8 characters (YYYYMMDD)
            inputValue = inputValue.slice(0, 8);
        }

        if (inputValue.length >= 4) {
            // Insert slashes for the date format (YYYY/MM/DD)
            inputValue = inputValue.slice(0, 4) + "/" + inputValue.slice(4, 6) + "/" + inputValue.slice(6);
        }

        e.target.value = inputValue;
        if (!/^\d{4}\/\d{2}\/\d{2}$/.test(inputValue)) {
            // Format is not YYYY/MM/DD, provide assistance
            e.target.setCustomValidity("Please enter a date in the format YYYY/MM/DD");
        } else {
            e.target.setCustomValidity(""); // Reset validation message
        }
    });

