import { fork } from "redux-saga/effects";
import page from "./page";

export default function* root() {
  yield fork(page);
}
