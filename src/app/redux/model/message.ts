interface MsgOptions {
  level: string;
  required: boolean;
}

export interface Message {
  text: string;
  options: MsgOptions;

}
