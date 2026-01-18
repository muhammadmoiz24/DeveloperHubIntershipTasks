export default function OTPInput() {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4].map(i => (
        <input
          key={i}
          maxLength={1}
          className="w-10 h-10 border text-center rounded"
        />
      ))}
    </div>
  );
}
