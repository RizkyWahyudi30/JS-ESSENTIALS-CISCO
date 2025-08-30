const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

// calculate shipping cost
if (
  userAge > 65 ||
  (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 5000))
) {
  shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
  shippingCost = shippingCost - 5;
} else if (userAge < 21) {
  isOrderValid = false;
}

// take account of insurance
if (isOrderValid && addInsurance && !hasPromoCode) {
  shippingCost += INSURANCE_COST;
}

// show message
if (isOrderValid) {
  console.log(shippingCost);
} else {
  console.log("Cannot order if under 21");
}
//  summarize what’s going on, we can dissect each case separately:

//     if userAge is less than 21 and hasParentsApproval is false, the order is invalid;
//     If userAge is less than 21 but hasParentsApproval is set to true, the shippingCost will be reduced by 5;
//     If userAge is 65 or higher, shippingCost is reduced to zero;
//     If userAge is lower than 65, but higher than or equal to 21 AND one of the following:
//     - hasParentsApproval is equal to true;
//     - cartValue is greater than 300;
//     - points is greater than 500;
//     the shippingCost is reduced to zero.

// In any other case, the cost remains at the default value.

// After all of this, we do another check:

//     if addInsurance is set to true;
//     AND in addition orderIsValid;
//     AND hasPromoCode is not true, then we add INSURANCE_COST to the shippingValue.

// In the end, we display the shippingCost if the order is valid, and the message if it is not.

// Take your time with this example, and play with the values to understand what is happening and how.
