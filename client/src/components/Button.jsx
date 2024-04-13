export default function Button({href, icon, name, color}) {
    return (
        <a
        href={href}
          type="button"
          className={`rounded-md inline-flex bg-${color? color:"indigo"}-600 px-4 py-1.5 text-sm font-semibold cursor-pointer text-white shadow-sm hover:bg-${color? color:"indigo"}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color? color:"indigo"}-600`}
        >
          <div className="flex">
          {icon}
          {name}
          </div>
        </a>
    )
  }