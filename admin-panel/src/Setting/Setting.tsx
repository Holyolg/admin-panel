import { Pencil } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Setting = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const settingSchema = z.object({
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().email().min(5).optional(),
    password: z.string().optional(),
    dateOfBirth: z.string().optional(),
    presentAdress: z.string().optional(),
    permanentAdress: z.string().optional(),
    city: z.string().optional(),
    postalCode: z.string().max(5).optional(),
    country: z.string().optional(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Валидация данных с помощью схемы Zod
      const validatedData = settingSchema.parse(formData);
      console.log("Valid data:", validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation failed:", error.errors);
        setFormErrors(error.errors);
      }
    }
  };
  return (
    <main className="main">
      <section className="card">
        <nav>
          <ul className="card__nav">
            <li className="active">Edit Profile</li>
            <li>Preferences</li>
            <li>Security</li>
          </ul>
        </nav>
        <form onSubmit={handleSubmit} className="card__section">
          <div className="card__profile">
            <div className="avatar avatar--large">
              <img src="./assets/img/pexels-christina-morillo-1181690 1.png" />
              <button className="avatar__edit">
                <Pencil
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  color="white"
                  size={18}
                />
              </button>
            </div>
            <div className="edit">
              <div className="edit__input">
                <label>Your Name</label>
                <input
                  placeholder="Charlene Reed"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit__input">
                <label>User Name</label>
                <input
                  placeholder="Charlene Reed"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit__input">
                <label>Email</label>
                <input
                  placeholder="charlenereed@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>
              <div className="edit__input">
                <label>Password</label>
                <input
                  placeholder="********"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className="edit__input">
                <label>Date of Birth</label>
                <input
                  placeholder="20 January 1990"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  type="date"
                />
              </div>
              <div className="edit__input">
                <label>Present Address</label>
                <input
                  placeholder="San Jose, California, USA"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit__input">
                <label>Permanent Address</label>
                <input
                  placeholder="San Jose, California, USA"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit__input">
                <label>City</label>
                <input
                  placeholder="San Jose"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit__input">
                <label>Postal Code</label>
                <input
                  placeholder="45962"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  max="99999"
                />
              </div>
              <div className="edit__input">
                <label>Country</label>
                <input
                  placeholder="USA"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="card__footer">
            <button type="submit" className="button button--primary">
              Save
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
