      /* -------------------- pick up -------------------- */
      /* navigation */
      function nextPickUpButton(that) {
        if (that.value == "nextDropOff") {
            document.getElementById("dropOff").style.display = "block";
            document.getElementById("pickUp").style.display = "none";
        } else {
            document.getElementById("dropOff").style.display = "none";
        }
      }

      /* input field - service */
      function checkPropertyServices(that) {
        if (that.value == "removal") {
            document.getElementById("ifYesPropertyServices").style.display = "block";
        } else {
            document.getElementById("ifYesPropertyServices").style.display = "none";
        } if (that.value == "delivery") {
            document.getElementById("ifYesLargeItemDeliveryServices").style.display = "block";
        } else {
            document.getElementById("ifYesLargeItemDeliveryServices").style.display = "none";
        } if (that.value == "storage") {
            document.getElementById("ifYesStorageServices").style.display = "block";
        } else {
            document.getElementById("ifYesStorageServices").style.display = "none";
        }
      }

      /* input field - type - do not show types */
      function checkType(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio") {
            document.getElementById("ifYesType").style.display = "block";
        } else {
            document.getElementById("ifYesType").style.display = "none";
        }
      }

      /* input field - room - do not show rooms */
      function checkRooms(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio") {
            document.getElementById("ifYesRoom").style.display = "block";
        } else {
            document.getElementById("ifYesRoom").style.display = "none";
        }
      }

      /* input field - storage unit - no type or rooms  but has how many? */
      function checkHowMany(that) {
        if (that.value == "storage" || that.value == "garage") {
            document.getElementById("ifYesHowMany").style.display = "block";
        } else {
            document.getElementById("ifYesHowMany").style.display = "none";
        }
      }

      /* input field - floor level */
      function checkLevel(that) {
        if (that.value == "flat" || that.value == "studio" || that.value == "room") {
            document.getElementById("ifYesLevel").style.display = "block";
        } else {
            document.getElementById("ifYesLevel").style.display = "none";
            document.getElementById("ifYesLift").style.display = "none";
        }
      }

      /* input field - lift */
      function checkLift(that) {
        if (that.value == "basement" || that.value == "1st" || that.value == "2nd" || that.value == "3rd" || that.value == "4th" || that.value == "5th" || that.value == "6th" || that.value == "7th" || that.value == "8th") {
            document.getElementById("ifYesLift").style.display = "block";
        } else {
            document.getElementById("ifYesLift").style.display = "none";
        }
      }

      /* input field - parking */
      function checkParking(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio" || that.value == "room") {
            document.getElementById("ifYesParking").style.display = "block";
        } else {
            document.getElementById("ifYesParking").style.display = "none";
        }
      }

      /* input field - nav button */
      function navButtons(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio" || that.value == "room" || that.value == "garage" || that.value == "storage") {
            document.getElementById("ifYesNavButton").style.display = "block";
        } else {
            document.getElementById("ifYesNavButton").style.display = "none";
        }
      }

      /* input field reset onchange Service
      function myResetServicePickUp() {
        document.getElementById("propertyType").selectedIndex = 0;
        document.getElementById("rooms").selectedIndex = 0;
        document.getElementById("type").selectedIndex = 0;
        document.getElementById("howMany").selectedIndex = 0;
        document.getElementById("level").selectedIndex = 0;
        document.getElementById("lift").selectedIndex = 0;
        document.getElementById("parking").selectedIndex = 0;
      }
      */

      /* input field reset onchange Property */
      function myResetPickUp() {
        document.getElementById("rooms").selectedIndex = 0;
        document.getElementById("howMany").selectedIndex = 0;
        document.getElementById("level").selectedIndex = 0;
        document.getElementById("lift").selectedIndex = 0;
        document.getElementById("parking").selectedIndex = 0;
      }

      /* -------------------- drop off -------------------- */
      /* navigation */
      function prevDropOffButton(that) {
        if (that.value == "prevDropOff") {
            document.getElementById("dropOff").style.display = "none";
            document.getElementById("pickUp").style.display = "block";
        } else {
            document.getElementById("pickUp").style.display = "none";
        }
      }

      function nextDropOffButton(that) {
        if (that.value == "nextHeavyLargeItems") {
            document.getElementById("dropOff").style.display = "none";
            document.getElementById("heavyLargeItems").style.display = "block";
        } else {
            document.getElementById("heavyLargeItems").style.display = "none";
        }
      }

      /* input field - type - do not show types */
      function checkDropOffType(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio") {
            document.getElementById("ifYesDropOffType").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffType").style.display = "none";
        }
      }

      /* input field - room - do not show rooms */
      function checkDropOffRooms(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio") {
            document.getElementById("ifYesDropOffRoom").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffRoom").style.display = "none";
        }
      }

      /* input field - storage unit - no type or rooms  but has how many? */
      function checkDropOffHowMany(that) {
        if (that.value == "storage" || that.value == "garage") {
            document.getElementById("ifYesDropOffHowMany").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffHowMany").style.display = "none";
        }
      }

      /* input field - floor level */
      function checkDropOffLevel(that) {
        if (that.value == "flat" || that.value == "studio" || that.value == "room") {
            document.getElementById("ifYesDropOffLevel").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffLevel").style.display = "none";
            document.getElementById("ifYesDropOffLift").style.display = "none";
        }
      }

      /* input field - lift */
      function checkDropOffLift(that) {
        if (that.value == "basement" || that.value == "1st" || that.value == "2nd" || that.value == "3rd" || that.value == "4th" || that.value == "5th" || that.value == "6th" || that.value == "7th" || that.value == "8th") {
            document.getElementById("ifYesDropOffLift").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffLift").style.display = "none";
        }
      }

      /* input field - parking with next button */
      function checkDropOffParking(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio" || that.value == "room") {
            document.getElementById("ifYesDropOffParking").style.display = "block";
        } else {
            document.getElementById("ifYesDropOffParking").style.display = "none";
        }
      }

        /* input field - nav button */
      function navDropOffButtons(that) {
        if (that.value == "house" || that.value == "flat" || that.value == "studio" || that.value == "room" || that.value == "garage" || that.value == "storage") {
            document.getElementById("ifYesNavDropOffButton").style.display = "block";
        } else {
            document.getElementById("ifYesNavDropOffButton").style.display = "none";
        }
      }

      /* input field reset onchange Property */
      function myResetDropOff() {
        document.getElementById("roomsDropOff").selectedIndex = 0;
        document.getElementById("howManyDropOff").selectedIndex = 0;
        document.getElementById("levelDropOff").selectedIndex = 0;
        document.getElementById("liftDropOff").selectedIndex = 0;
        document.getElementById("parkingDropOff").selectedIndex = 0;
      }

      /* -------------------- heavy and large items -------------------- */
      /* navigation */
      function prevHeavyLargeItemsButton(that) {
        if (that.value == "prevHeavyLargeItems") {
            document.getElementById("dropOff").style.display = "block";
            document.getElementById("heavyLargeItems").style.display = "none";
        } else {
            document.getElementById("dropOff").style.display = "none";
        }
      }

      function nextHeavyLargeItemsButton(that) {
        if (that.value == "nextHeavyLargeItems") {
            document.getElementById("heavyLargeItems").style.display = "none";
            document.getElementById("wrapUp").style.display = "block";
        } else {
            document.getElementById("wrapUp").style.display = "none";
        }
      }

      /* -------------------- wrap up -------------------- */
      /* navigation */
      function prevWrapUpButton(that) {
        if (that.value == "prevWrapUp") {
            document.getElementById("heavyLargeItems").style.display = "block";
            document.getElementById("wrapUp").style.display = "none";
        } else {
            document.getElementById("heavyLargeItems").style.display = "none";
        }
      }

      function nextWrapUpButton(that) {
        if (that.value == "nextConfirmation") {
            document.getElementById("wrapUp").style.display = "none";
            document.getElementById("confirmation").style.display = "block";
        } else {
            document.getElementById("confirmation").style.display = "none";
        }
      }
