#include <stdio.h>


int main(void)

{
	int age;
	double weight, height;

	
	printf("나이를 입력하세요:");
	scanf_s("%d", &age);
	printf("키를 입력하세요:");
	scanf_s("%.1lf", &height);
	printf("몸무게를 입력하세요:");
	scanf_s("%.1lf",&weight);
	
	printf("---------------------------\n");
	printf("당신의 나이는 %d살 키는%.1lf cm,몸무게는 %.1lf kg 이군요!", age, height, weight);

	
	return 0;
}

//실패본
//두번째 수정본
