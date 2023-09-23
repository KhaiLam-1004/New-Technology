// controllers/indexController.js
const mygroup = require("../models/mygroup");

exports.getAllMembers = (req, res) => {
  res.json(mygroup);
};

exports.addMember = (req, res) => {
  const { id, name } = req.body;
  // Kiểm tra xem id đã tồn tại trong mygroup chưa
  const existingMember = mygroup.find((member) => member.id === id);

  if (existingMember) {
    res.status(400).json({ error: "Member already exists." });
  } else {
    mygroup.push({ id, name });
    res.json({ message: "Member added successfully." });
  }
};

exports.getMemberById = (req, res) => {
  const id = req.params.id;
  const member = mygroup.find((m) => m.id === id);

  if (member) {
    res.json(member);
  } else {
    res.json({ error: "Member not found." });
  }
};

exports.getMessage = (req, res) => {
  const id = req.params.id;
  const members = mygroup.map((m) => m.name);

  if (id) {
    const member = mygroup.find((m) => m.id === id);
    if (member) {
      res.send(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
    } else {
      res.send("Not valid");
    }
  } else {
    res.send(`<html><body><ul>${members.map((m) => `<li>${m}</li>`).join("")}</ul></body></html>`);
  }
};
