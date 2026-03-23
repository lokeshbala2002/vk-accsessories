# VK Accessories - Setup Instructions

## Firebase Configuration

To enable order saving to Firebase and WhatsApp integration, you need to configure Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project `vk-accessories-bc145`
3. Go to Project Settings > General > Your apps
4. If you don't have a web app, create one
5. Copy the Firebase config object
6. Replace the placeholder values in `index.html` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "vk-accessories-bc145.firebaseapp.com",
  projectId: "vk-accessories-bc145",
  storageBucket: "vk-accessories-bc145.appspot.com",
  messagingSenderId: "YOUR_ACTUAL_MESSAGING_SENDER_ID",
  appId: "YOUR_ACTUAL_APP_ID"
};
```

## Firestore Setup

1. In Firebase Console, go to Firestore Database
2. Create a database if you haven't already
3. Set it to "Start in test mode" for development
4. The app will automatically create an `orders` collection when orders are placed

## Features Added

- **Order Validation**: Ensures all required fields are filled and valid
- **Firebase Integration**: Saves complete order details to Firestore
- **WhatsApp Integration**: Opens WhatsApp with pre-filled order message
- **Loading States**: Shows feedback during order processing

## Testing

1. Add items to cart
2. Go to checkout
3. Fill all form fields
4. Click "Place Order"
5. Order will be saved to Firebase and WhatsApp will open with order details

## WhatsApp Number

The WhatsApp number is set to `918270534479` (8270534479). Update this in the `placeOrder` function if needed.</content>
<parameter name="filePath">c:\Users\DINESH RAVI\Downloads\VK Accessories\README.md