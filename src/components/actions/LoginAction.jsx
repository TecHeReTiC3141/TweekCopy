export default async function loginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get("email"),
        password = formData.get("password");
    console.log(email, password, request.url);
    return null;
}