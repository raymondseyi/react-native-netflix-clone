export interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Index() {
  console.log(process.env.TMDB_API_KEY)

  useEffect(() => {
    fetchData();
  }, []);
  const [movies, setmovies] = useState<Movies[]>([]);
  const url = process.env.TMDB_API_KEY;
  const apiKey = "841097b9785ec9f2ff65194fd73be11c";
  const apiToken = process.env.TMDB_API_TOKEN

  let image_base_url = "https://image.tmdb.org/t/p/original";
  const fetchData = () => {
    axios
      .get(`${url}?api_key=${apiKey}`)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data.results[0].title);
        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const colorScheme = useColorScheme();
  return (
    <ScrollView>
      {/* <Text style={{ color: Colors[colorScheme ?? "light"].text }}>Hello</Text> */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
          height: 600,
        }}
      >
        {/* <Image resizeMode="cover" style={{ width:'95%', height:'100%',borderRadius:10 }} source={{ uri : `${image_base_url}${movies[2].poster_path}` }}/> */}
      </View>
      <View style={{ flex: 1, flexDirection: "row",position:'relative',bottom:"15%",marginHorizontal:20 }}>
        <TouchableOpacity style={styles.main_card_btn}>
          <Ionicons name="play" size={24} color="black" />
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.main_card_btn,{backgroundColor:Colors["dark"].background }]}
        >
          <Ionicons name="add" size={24} color={Colors[colorScheme ?? "light"].text }/>
          <Text style={{ color : Colors[colorScheme ?? "light"].text }}>My List</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => (
          <View style={{ margin: 4 }}>
            <Image
              style={{ width: 120, height: 170, borderRadius: 5 }}
              source={{ uri: `${image_base_url}${item.poster_path}` }}
            />
          </View>
        )}
        horizontal={true}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  main_card_btn: {
    backgroundColor: "white",
    padding: 10,
    width: "50%",
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5
  },
});
