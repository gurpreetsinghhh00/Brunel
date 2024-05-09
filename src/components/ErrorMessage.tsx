import ErrorBadge from "../assets/ErrorBadge.svg"

const ErrorMessage = ({error} : {error : string}) => {
  return (
    <div className="mt-3 flex py-[1px]">
        <div className="flex justify-center items-center"><img src={ErrorBadge} alt="error symbol" /></div>
            <div className="font-medium text-base text-[#FF0808] ml-[6px]">{error}</div>
        </div>
  )
}

export default ErrorMessage
