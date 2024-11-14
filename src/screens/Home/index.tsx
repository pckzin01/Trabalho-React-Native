import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Logo from "../../Mock/images/CapCut-Logo.jpg";
import IconButton from "../../components/IconBotton";
import Editar from "../../Mock/images/editar.png";
import Camera from "../../Mock/images/camera.png";
import Play from "../../Mock/images/play.png";
import Ia from "../../Mock/images/ia.png";
import Seta from "../../Mock/images/seta.png";
import Tesoura from "../../Mock/images/Tesoura.png";
import Modelos from "../../Mock/images/Modelos.png";
import Sino from "../../Mock/images/Sino.png";
import User from "../../Mock/images/User.png";
import Nuvem from "../../Mock/images/Nuvem.png";
import Caneta from "../../Mock/images/Caneta.png";
import Add from "../../Mock/images/Add.png";


export const Home = () => {
  const icons = [
    { id: "1", source: Editar, desc: "Editor de Fotos" },
    { id: "2", source: Camera, desc: "Câmera" },
    { id: "3", source: Play, desc: "AutoCut" },
    { id: "4", source: Ia, desc: "Fotos do produto" },
    { id: "5", source: Seta, desc: "Expandir" },
  ];

  const icons2 = [
    { id: "1", source: Tesoura, desc: "Editar" },
    { id: "2", source: Modelos, desc: "Modelos" },
    { id: "3", source: Sino, desc: "Inbox" },
    { id: "4", source: User, desc: "Eu" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <FlatList
        data={icons}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <IconButton
            source={item.source}
            desc={item.desc}
            styleContainer={styles.iconContainer}
            styleIcon={styles.icon}
            styleText={styles.descricao}
          />
        )}
      />

      <TouchableOpacity style={[styles.novoContainer, { flexDirection: 'row'}]}>
        <Image style={[styles.add]} source={Add} />
        <Text style={styles.project}>Novo projeto</Text>
      </TouchableOpacity>

      <View style={styles.base}>
        <Text style={styles.project2}>Projetos</Text>
        <TouchableOpacity style={styles.campoDown}>
          <Image style={styles.download} source={Nuvem} />
          <Text style={styles.espaco}>Espaço</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.edit} source={Caneta} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <FlatList
          data={icons2}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <IconButton
              source={item.source}
              desc={item.desc}
              styleContainer={styles.iconContainer2}
              styleIcon={styles.icon2}
              styleText={styles.descricao2}
            />
          )}
        />
      </View>
    </View>
  );
};
