import { data, type ActionFunctionArgs } from "react-router";
import { sendNewsletterEmail } from "../utils/mailer.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return data({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();

    if (!email) {
      return data({ error: "Email is required" }, { status: 400 });
    }

    console.log(`[Newsletter] Subscribing: ${email}, OWNER_MAIL: ${process.env.OWNER_MAIL}`);
    await sendNewsletterEmail(email);
    return data({ success: true });
  } catch (error: any) {
    console.error("Newsletter subscription error:", error.message || error);
    return data(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
