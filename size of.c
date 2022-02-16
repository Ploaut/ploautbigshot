#include <stdio.h>

int main(void)
{
	int a = 10;
	double b = 3.14;

	printf("int 형 변수의 크기: %d Byte \n", sizeof(a));
	printf("double 형 변수의 크기: %d Byte\n", sizeof(b));
	
	int res = 2;

	a += 50;

	printf("a = %d ", a);


	
	return 0;

}