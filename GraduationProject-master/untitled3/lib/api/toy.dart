import 'dart:convert';
import 'package:http/http.dart' as http;

class Toy {
  String baseUrl = "http://10.0.2.2:8001/api/game";
  Future<List> getAllToys() async {
    try {
      var response = await http.get(Uri.parse(baseUrl));
      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return Future.error("server error");
      }
    } catch (e) {
      return Future.error(e);
    }
  }
}
