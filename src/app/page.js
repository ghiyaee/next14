import dbConnect from './dbConnect'
import User from '../../model/User'
export default function Home() {
  async function newUser(formData) {
    "use server"
    console.log('test');
    let name = formData.get('name')?.valueOf();
    let email = formData.get('email')?.valueOf();
    let pass = formData.get('pass')?.valueOf();
    console.log(name);
    try {
     await dbConnect()
      let user = new User({ name, email, pass })
      await user.save()
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <main className="container m-auto w-96">
      <h1 className="text-center">test nextjs14</h1>
      <form action={newUser} className="mt-4 flex flex-col gap-5">
        <input
          type="text"
          placeholder="name"
          name="name"
          className="block w-full border p-2"
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="block w-full border p-2"
        />
        <input
          type="text"
          placeholder="password"
          name="pass"
          className="block w-full border p-2"
        />
        <butoon
          type="submit"
          className="bg-yellow-500 w-24 text-center p-2 cursor-pointer"
        >
          add user
        </butoon>
      </form>
    </main>
  );
}
