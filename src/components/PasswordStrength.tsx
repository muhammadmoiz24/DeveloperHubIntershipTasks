export default function PasswordStrength({ password }: { password: string }) {
  const strength =
    password.length > 8 ? "Strong" : password.length > 4 ? "Medium" : "Weak";

  return <p className="text-sm mt-1">Strength: {strength}</p>;
}
