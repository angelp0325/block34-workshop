<<<<<<< HEAD
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
=======
import app from "#app";
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
>>>>>>> 2a9c3ac3033b542f20ddb3f8b62de9b9ba6e8cec
});
