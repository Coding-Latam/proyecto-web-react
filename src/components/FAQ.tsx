import { IFaq } from "../types/faq";

export function FAQ({ question, answer }: IFaq) {
  return (
    <div className="faqs-item">
      <details>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details>
    </div>
  );
}
