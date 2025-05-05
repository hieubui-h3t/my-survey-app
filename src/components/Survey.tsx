'use client'

import { useCallback } from 'react';
import 'survey-core/survey-core.css';
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

const surveyJson = {
  title: "SurveyJS All Field Types Demo",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      elements: [
        {
          name: "firstName",
          title: "1. Enter your first name:",
          type: "text"
        },
        {
          name: "lastName",
          title: "2. Enter your last name:",
          type: "text"
        },
        {
          name: "eatOrDrink",
          title: "3. Would you like to eat or drink?",
          type: "radiogroup",
          choices: ["Eat", "Drink"]
        },
        {
          name: "foodChoice",
          title: "4. Which food would you like?",
          type: "radiogroup",
          choices: ["Pork", "Chicken", "Fish"],
          visibleIf: "{eatOrDrink} = 'Eat'"
        },
        {
          name: "drinkChoice",
          title: "4. Which drink would you like?",
          type: "radiogroup",
          choices: ["Tea", "Coffee"],
          visibleIf: "{eatOrDrink} = 'Drink'"
        },
        {
          name: "preferredIngredients",
          title: "5. Select the ingredients you want:",
          type: "tagbox",
          choices: ["Onion", "Garlic", "Sugar", "Milk", "Pepper", "Salt"]
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          name: "checkboxExample",
          title: "6. What fruits do you like?",
          type: "checkbox",
          choices: ["Apple", "Banana", "Orange", "Mango"]
        },
        {
          name: "dropdownExample",
          title: "7. Select your country:",
          type: "dropdown",
          choices: ["USA", "UK", "Canada", "Australia"]
        },
        {
          name: "commentExample",
          title: "8. Additional comments:",
          type: "comment"
        },
        {
          name: "ratingExample",
          title: "9. Rate our service:",
          type: "rating",
          rateMin: 1,
          rateMax: 5
        },
        {
          name: "booleanExample",
          title: "10. Do you agree to the terms?",
          type: "boolean"
        },
        {
          name: "imagePickerExample",
          title: "11. Pick your favorite image:",
          type: "imagepicker",
          choices: [
            { value: "dog", imageLink: "https://hanoipetcare.com.vn/wp-content/uploads/2025/01/9.webp" },
            { value: "cat", imageLink: "https://imageserver.petsbest.com/marketing/blog/toy-poodle.jpg" }
          ]
        }
      ]
    },
    {
      name: "page3",
      elements: [
        {
          name: "fileUploadExample",
          title: "12. Upload a file (optional):",
          type: "file"
        },
        {
          name: "htmlExample",
          type: "html",
          html: "<h4>13. This is a static HTML block</h4><p>Use it for info.</p>"
        },
        {
          name: "matrixExample",
          title: "14. Rate each aspect:",
          type: "matrix",
          columns: ["Poor", "Fair", "Good", "Excellent"],
          rows: ["Price", "Quality", "Customer Service"]
        },
        {
          name: "matrixDropdownExample",
          title: "15. Provide details:",
          type: "matrixdropdown",
          columns: [
            { name: "rating", title: "Rating", cellType: "dropdown", choices: [1, 2, 3, 4, 5] },
            { name: "comment", title: "Comment", cellType: "comment" }
          ],
          rows: ["Product A", "Product B"]
        },
        {
          name: "rankingExample",
          title: "16. Rank the following:",
          type: "ranking",
          choices: ["Speed", "Cost", "Features"]
        },
        {
          name: "multipleTextExample",
          title: "17. Contact details:",
          type: "multipletext",
          items: [
            { name: "email", title: "Email" },
            { name: "phone", title: "Phone Number" }
          ]
        },
        {
          name: "signatureExample",
          title: "18. Sign here:",
          type: "signaturepad"
        },
        {
          name: "datepickerExample",
          title: "19. Select your birthdate:",
          type: "datepicker",
          inputType: "date"
        }
      ]
    }
  ]
};


export default function SurveyComponent() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender: Model) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <Survey model={survey} />
  );
}

// function saveSurveyResults(url: string, json: object) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }