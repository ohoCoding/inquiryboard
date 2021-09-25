import dynamoose from "dynamoose";
import dotenv from "dotenv"

dotenv.config()

dynamoose.aws.sdk.config.update({
  "accessKeyId": process.env.AWS_AccessKeyId,
  "secretAccessKey": process.env.AWS_SecretAccessKey,
  "region": process.env.AWS_REGION
});

dynamoose.aws.ddb.local();

const Inquiry = dynamoose.model("Inquiry", new dynamoose.Schema(
  {
    "id": {
      type: String
    },
    "name": {
      type: String
    },
    "title": {
      type: String
    },
    "email": {
      type: String
    },
    "status": {
      type: String
    },
    "timestamp": {
      type: String
    },
    "open": {
      type: Boolean
    },
    "content": {
      type: String
    },
    "password": {
      type: String
    },
  }));

export { Inquiry }