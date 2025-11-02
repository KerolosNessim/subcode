"use server";

import { getLocale } from "next-intl/server";

// تجهيز الهيدر
async function getHeaders(locale,content="application/json") {
  const headers = {
    "Content-Type": content,
  };

  // اللغة
  const currentLocale = locale || (await getLocale());
  headers["Accept-Language"] = currentLocale;

  return headers;
}

// جلب البيانات (GET)
export async function getData({ url, locale }) {
  try {
    const headers = await getHeaders(locale);
    const response = await fetch(`https://panel.subcodeco.com/api${url}`, {
      headers,
    });
    const data = await response.json();
    return { code: response.status, success: true, data };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// إرسال البيانات (POST)
export async function postData({ url, data, locale ,content="application/json"}) {
  try {
    const headers = await getHeaders(locale,content);

    const response = await fetch(`https://panel.subcodeco.com/api${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data || {}),
    });

    const resData = await response.json();
    return { code: response.status, success: true, data: resData };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// حذف البيانات (DELETE)
export async function deleteData({ url, data = null, locale }) {
  try {
    const headers = await getHeaders(locale);

    const options = {
      method: "DELETE",
      headers,
    };

    // لو فيه بيانات محتاج تبعتها في body
    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(
      `https://panel.subcodeco.com/api${url}`,
      options
    );
    const resData = await response.json();

    return { code: response.status, success: true, data: resData };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}
