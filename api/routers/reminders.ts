import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.send(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).send(reminder);
});

export default router;
