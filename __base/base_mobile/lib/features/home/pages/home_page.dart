import 'package:base_mobile/states/app/app_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  AppController appController = Get.put(AppController());

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Obx(
          () => Center(
            child: appController.loading.value
                ? const Text('true ne')
                : const Text('false ne'),
          ),
        ),
        ElevatedButton(
          onPressed: () => appController.showLoading(),
          child: const Text('hsahashas'),
        ),
        Center(
          child: Text(
            'logged_in'.trParams(
              {'name': 'Jhon', 'email': 'jhon@example.com'},
            ),
          ),
        ),
      ],
    );
  }
}
