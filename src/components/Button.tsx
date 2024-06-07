interface IButton {
  content: string;
  href: string;
}

export function Button({ content, href }: IButton) {
  return (
    <a className="btn-primary" href={href}>
      {content}
    </a>
  );
}
