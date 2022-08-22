This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
import type { NextPage } from "next";
import React, { useState } from "react";

const Index: NextPage = () => {
  const [value, setValue] = useState<number>(20);
  const [editingValue, setEditingValue] = useState<string>("20");
  const [isFocus, setIsFocus] = useState(false);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = e.target.value;
    if (textValue === "") {
      setEditingValue("");
    }

    const tailChar = textValue.slice(-1);
    //数値、ピリオド、ハイフンのみ入力可能
    const regexp = new RegExp(/[0-9]|\.|-/);
    var hyphenCount = [...textValue].filter((x) => x === "-").length;
    var periodCount = [...textValue].filter((x) => x === ".").length;

    if (!regexp.test(tailChar) || periodCount > 1) {
      return;
    }

    if (hyphenCount > 1 || (textValue.length > 1 && tailChar === "-")) {
      return;
    }

    if (textValue.length === 1 && textValue === ".") {
      setEditingValue("0.");
      return;
    }

    //0連続入力不可の処理を入れる

    // 「-.」の順で入れれないようにする

    setEditingValue(textValue);
  };

  const isNumber = (s: string): boolean => {
    // 符号あり小数 (- のみ許容)
    const regexp = new RegExp(/^[-]?([1-9]\d*|0)(\.\d+)?$/);
    console.log(s, regexp.test(s));
    return regexp.test(s);
  };

  const onBlur = () => {
    if (isNumber(editingValue)) {
      setValue(Number(editingValue));
    } else {
      setEditingValue(value.toString());
    }
    setIsFocus(false);
  };

  const dispValue = () => {
    return isFocus ? editingValue : (Number(editingValue) * 2).toLocaleString();
  };

  return (
    <div>
      <div>数値のみ入力</div>
      <input
        type="tel"
        value={dispValue()}
        onChange={handelChange}
        onBlur={onBlur}
        onFocus={() => setIsFocus(true)}
      />
      実際の値：{value}
      <input type="tel" />
    </div>
  );
};
export default Index;

```
