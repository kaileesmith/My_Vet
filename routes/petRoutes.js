const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getPets,
  getPetsByUser,
  updatePet,
  delPet,
  createPet,
  getPetByID,
  addPetMed,
  addPetReminder,
  addPetVisit,
  updatePetVisit,
  findPetVisit,
  delPetVisit
} = require("../controllers/PetController");

router.get("/getpets", auth, getPets);
router.get("/getpetbyuser/:id", auth, getPetsByUser);
router.put("/updatepet/:id", auth, updatePet);
router.delete("/pet/:id", auth, delPet);
router.post("/pet", auth, createPet);
router.get("/pet/:id", auth, getPetByID);
router.put("/addpetmed/:id", auth, addPetMed);
router.put("/addPetReminder/:id", auth, addPetReminder);
router.put("/addPetVisit/:id", auth, addPetVisit);
router.put("/updatePetVisit/:id/:visitid", auth, updatePetVisit);
router.get("/findpetvisit/:id/:visitid", auth, findPetVisit);
router.delete("/delPetVisit/:id/:visitid", auth, delPetVisit);



module.exports = router;
