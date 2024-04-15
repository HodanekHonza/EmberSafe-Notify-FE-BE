export default function Button({href, icon, name, color, type}) {
    // Href estli chcete udelat link
    // ICON estli chcete mit icon
    // NAME nazem tlacitka
    // COLOR estli checete jinu farbu jak Indigo(default) tak napiste svoju
    // TYPE estli chcete button k forme napiste type="submit"
    return (
      <>
      {type ? (
        <button type={type} className={`rounded-md inline-flex bg-${color? color:"indigo"}-600 px-4 py-1.5 text-sm font-semibold cursor-pointer text-white shadow-sm hover:bg-${color? color:"indigo"}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color? color:"indigo"}-600`}>
        <div className="flex">
          {icon}
          {name}
          </div>
        </button>)
        :
        (<a
        href={href}
          className={`rounded-md inline-flex bg-${color? color:"indigo"}-600 px-4 py-1.5 text-sm font-semibold cursor-pointer text-white shadow-sm hover:bg-${color? color:"indigo"}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color? color:"indigo"}-600`}
        >
          <div className="flex">
          {icon}
          {name}
          </div>
        </a>
      )}
      </>
    )
  }