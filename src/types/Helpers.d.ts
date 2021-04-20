interface PayloadModel {
  form: String;
  subject: String;
}

interface NewPayloadModel {
  from: String | null;
  subject: String | null;
  empty: Boolean;
}
