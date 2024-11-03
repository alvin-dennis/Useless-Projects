export default function Button({ value, onClick, isEqual }) {
    return (
      <button
        onClick={onClick}
        className={`text-2xl font-bold p-4 rounded-lg transition-colors duration-200 ${
          isEqual
            ? 'col-span-2 bg-green-500 hover:bg-green-600 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {value}
      </button>
    )
  }