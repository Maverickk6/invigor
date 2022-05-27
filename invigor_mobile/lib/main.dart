import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Invigor',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const Center(
            child: Text(
          'Invigor',
          style: TextStyle(fontSize: 20),
        )));
  }
}
