import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";


export default function Calculator() {

  const [display, setDisplay] = useState("0");

  function handlePress(value: string) {
    console.log(value);
    
    switch (value) {
      case "=":
        const resultado = eval(display);
        setDisplay(String(resultado));
        if(display=="") setDisplay("Pato no Tucupi");
        break;
      case "C":
        setDisplay("");
        break;
      case "√":
        const resultadoRaiz = Math.sqrt(Number(display))
        setDisplay(String(resultadoRaiz));
      break;
      case "<-":
        setDisplay(display.slice(0, -1));
      break;

      default:
        setDisplay((prev) => (prev === "0" ? value : prev + value));
        break;
    }
  }

  function renderButton(label: string) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress(label)}
      >
        <Text style={styles.displayText}>{label}</Text>
      </TouchableOpacity>
    );
  }


  return (
    <Grid style={styles.grid}>

      {/* Display */}
      <Row size={1} style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </Row>

      {/*Linha 0*/}
      <Row size={1}>
          <Col>{renderButton("√")}</Col>
          <Col>{renderButton("C")}</Col>
          <Col>{renderButton("<-")}</Col>
        </Row>

      {/* Linha 1 */}
      <Row size={1}>
        <Col>{renderButton("7")}</Col>
        <Col>{renderButton("8")}</Col>
        <Col>{renderButton("9")}</Col>
        <Col>{renderButton("/")}</Col>
      </Row>

      {/* Linha 2 */}
      <Row size={1}>
        <Col>{renderButton("4")}</Col>
        <Col>{renderButton("5")}</Col>
        <Col>{renderButton("6")}</Col>
        <Col>{renderButton("*")}</Col>
      </Row>

      {/* Linha 3 */}
      <Row size={1}>
        <Col>{renderButton("1")}</Col>
        <Col>{renderButton("2")}</Col>
        <Col>{renderButton("3")}</Col>
        <Col>{renderButton("-")}</Col>
      </Row>

      {/* Linha 4 */}
      <Row size={1}>
        <Col>{renderButton(".")}</Col>
        <Col>{renderButton("0")}</Col>
        <Col>{renderButton("=")}</Col>
        <Col>{renderButton("+")}</Col>
      </Row>

    </Grid>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    color: "#fff",
    fontSize: 32,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    margin: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  grid: {
    paddingVertical: 60,
    paddingHorizontal: 500,
  },
});