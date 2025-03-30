type answer = {
    answer:string
}
export const Answer = ({answer}:answer) => {
  return (
    <div className="answer">{answer}</div>
  )
}
