// calc.cpp
#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char op;

    cin >> num1 >> op >> num2;

    switch(op) {
        case '+': cout << num1 + num2; break;
        case '-': cout << num1 - num2; break;
        case '*': cout << num1 * num2; break;
        case '/': cout << (num2 != 0 ? num1 / num2 : 0); break;
        default: cout << "Invalid";
    }

    return 0;
}
