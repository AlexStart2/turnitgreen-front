import { useState } from "react";
import {
  Form,
  Button,
  Card,
  CardTitle,
} from "react-bootstrap";
import styles from "@/styles/CARD-Articles.module.css";

function NewsletterSubmission({onClose}) {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email,
      name,
      company,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/subscribe/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Subscription successful");
      } else {
        const responseBody = await response.text(); // Get the response body
        alert(responseBody);
        console.error("Error subscribing:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading back to false after receiving response
    }
  };

 

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="d-flex justify-content-center align-items-center bg-light bg-opacity-50 fixed-top w-100 h-100"
        onClick={onClose}
      >
        <Form
          className="d-flex flex-column text-center bg-light "
          style={{ border: "3px solid #C1F036", borderRadius: "30px" }}
          onSubmit={handleSubmit}
          onClick={(e)=>{e.stopPropagation()}}
        >
          <CardTitle className="mt-5 mb-3 ">
            Subscribe to our Newsletter
          </CardTitle>
          <div
            className=" w-100 h-100 "
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "self-end",
              justifyContent: "center",
              paddingLeft:"1vw"
            }}
          >
            <div className=" w-100 d-flex flex-row ">
              <Form.Label
                className=""
                style={{ margin: "auto", marginRight: "0px" }}
              >
                Email:{" "}
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" m-3 mb-2 mt-1 "
                style={{ width: "35vw" }}
              />
            </div>

            <div className=" w-100 d-flex flex-row">
              <Form.Label
                className=""
                style={{ margin: "auto", marginRight: "0px" }}
              >
                Name (optional):{" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="m-3 mb-2 mt-1"
                style={{ width: "35vw" }}
              />
            </div>

            <div className=" w-100 d-flex flex-row ">
              <Form.Label
                className=""
                style={{ margin: "auto", marginRight: "0px" }}
              >
                Company (optional):{" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="m-3 mb-0 mt-1"
                style={{ width: "35vw" }}
              />
            </div>
          </div>

          <Button
            variant="primary"
            type="submit"
            className=" align-self-end m-4 bg-white text-black "
            style={{
              border: "2px solid #c1f036",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "2px 2px 2px #979a92"; // Add shadow on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "none"; // Remove shadow when not hovering
            }}
            disabled={loading}
          >
            {loading ? <div className={styles.custom_loader}></div> : "Subscribe"}
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default NewsletterSubmission;
