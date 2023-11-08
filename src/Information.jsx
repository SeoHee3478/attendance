import useInput from "./useInput";

function Information() {
  const [state, onChange] = useInput({
    name: "",
    email: "",
  });

  const { name, email } = state;

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="계정명"
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="이메일"
        onChange={onChange}
      />
      <div>
        <div>
          {name} {email}
        </div>
      </div>
    </div>
  );
}

export default Information;
