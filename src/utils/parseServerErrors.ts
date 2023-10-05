interface ErrorObject {
  [key: string]: string[];
}

export default function parseServerErrors(error: ErrorObject): string {
  let errorMessage = "";
  console.log(error);
  if (typeof error === "string") {
    errorMessage = error;
  }

  return errorMessage;
}
