export const handleFacialAuthismRequest = async (image) => {
  try {
    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("image", image);
    const raw = await fetch("https://ec2-34-202-159-41.compute-1.amazonaws.com/autism/facial", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return await raw.json();
  } catch (error) {
    console.log(error);
  }
};

export const handleNeruoAuthismRequest = async (image) => {
  try {
    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("image", image);
    const raw = await fetch("https://ec2-34-202-159-41.compute-1.amazonaws.com/autism/neuro", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return await raw.json();
  } catch (error) {
    console.log(error);
  }
};

export const handleLoginRequest = async (formData) => {
  try {
    const raw = await fetch("https://ec2-34-202-159-41.compute-1.amazonaws.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await raw.json();
  } catch (error) {
    console.log(error);
  }
};

export const handleRequestRequest = async (formData) => {
  try {
    const raw = await fetch("https://ec2-34-202-159-41.compute-1.amazonaws.com/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await raw.json();
  } catch (error) {
    console.log(error);
  }
};
